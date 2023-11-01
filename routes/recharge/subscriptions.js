import express from 'express';
import axios from 'axios';
const router = express.Router();

if (process.env.NODE_ENV !== 'production') {
  import('dotenv').config();
}

const baseCustomersUrl = 'https://api.rechargeapps.com/subscriptions?limit=250';
const api_key = process.env.RECHARGE_API_KEY;

router.post('/', async (req, res) => {
    let result;
    const token = req.headers.authorization?.split(" ")[1];
    
    if (token !== process.env.WELD_BEARER_TOKEN) {
      const err = new Error("Not authorized");
      err.status = 403;
      throw err;
    }

    try {
      console.log(api_key)
      const resp = await axios.get(req.body.state?.nextUrl||baseCustomersUrl, {
        headers: {
          'X-Recharge-Access-Token': api_key,
          'X-Recharge-Version': '2021-11',
          'Content-Type': 'application/json'
        }
      });
      //console.log("NEXTCURS", resp.data.next_cursor);
      if (resp.data.next_cursor) {
          result = {
            insert: resp.data.customers,                                                            // Data to be inserted into warehouse
            state: {nextUrl: baseCustomersUrl.concat('&cursor=').concat(resp.data.next_cursor)},    // Define any variables here. Can be used for e.g. pagination or incremental pointers
            hasMore: true                                                                               // If true Weld will call endpoint again with the updated state to get more rows
          };
        } else {
          result = {
            insert: resp.data.customers,          // Data to be inserted into warehouse
            state: {nextUrl: baseCustomersUrl},   // Define any variables here. Can be used for e.g. pagination or incremental pointers
            hasMore: false                            // If true Weld will call endpoint again with the updated state to get more rows
          }
      }
    
      res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

//module.exports = router;
export default router;