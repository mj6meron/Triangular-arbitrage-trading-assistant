/**
 Triangular arbitrage involves taking advantage of discrepancies between three different currency pairs.
  For example, let's say the exchange rate between the US dollar and the British pound is 1.40, 
  the exchange rate between the British pound and the euro is 0.90, 
  and the exchange rate between the US dollar and the euro is 1.20. 
  These exchange rates might create an arbitrage opportunity as follows:

Convert $100 to £70 (100 / 1.40 = 70)
Convert £70 to 63 euros (70 / 0.90 = 77)
Convert 63 euros back to $76 (63 x 1.20 = 76)
In this example, you would have started with $100, converted it to euros and back to dollars, 
and ended up with $76. The difference of $24 is the potential profit from the arbitrage opportunity.

It's important to note that triangular arbitrage opportunities can be difficult to identify and may not last long, 
as the exchange rates between currencies can change quickly. In addition, 
there may be transaction costs associated with converting one currency to another, 
which can eat into potential profits. As with any arbitrage strategy,
 it's important to carefully consider the risks involved before entering into a trade.


 */

function triangularArbitrage(usd, gbp, eur, leverage) {
    // Convert $100 to £70
    let pounds = 100 / usd * gbp;
  
    // Convert £70 to 63 euros
    let euros = pounds / gbp * eur;
  
    // Convert 63 euros back to $76
    let finalUsd = euros * usd / eur;
  
    // Calculate profit
    let profit = finalUsd - 100;
  
    // Check if profit is positive
    if (profit > 0) {
      // Calculate profit with leverage
      profit *= leverage;
  
      // Print potential profit
      console.log(`Potential profit: $${profit.toFixed(2)}`);
  
      // Calculate transaction costs
      let transactionCosts = (pounds * 0.01) + (euros * 0.01) + (finalUsd * 0.01);
  
      // Subtract transaction costs from profit
      profit -= transactionCosts;
  
      // Print final profit after transaction costs
      console.log(`Profit after transaction costs: $${profit.toFixed(2)}`);
    } else {
      // Adjust exchange rates to make trade profitable
      usd *= 1.01;
      gbp *= 0.99;
      eur *= 1.01;
  
      // Convert $100 to £69.30
      pounds = 100 / usd * gbp;
  
      // Convert £69.30 to 64.07 euros
      euros = pounds / gbp * eur;
  
      // Convert 64.07 euros back to $76.88
      finalUsd = euros * usd / eur;
  
      // Calculate profit
      profit = finalUsd - 100;
  
      // Calculate profit with leverage
      profit *= leverage;
  
      // Print potential profit
      console.log(`Potential profit: $${profit.toFixed(2)}`);
  
      // Calculate transaction costs
      let transactionCosts = (pounds * 0.01) + (euros * 0.01) + (finalUsd * 0.01);
  
      // Subtract transaction costs from profit
      profit -= transactionCosts;
  
      // Print final profit after transaction costs
      console.log(`Profit after transaction costs: $${profit.toFixed(2)}`);
    }
  }
  
  // Example usage
  triangularArbitrage(1.40, 0.90, 1.20, 500);
  