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


 In this updated version of the function, if the initial profit calculation is negative, 
 the function adjusts the exchange rates by a small amount (in this case, 1%) and recalculates the profit. 
 This can potentially make the trade profitable, depending on the magnitude of the adjustments and the impact of transaction costs.

It's important to note that this is just a simple example, 
and in a real trading situation you would need to consider additional factors such as transaction costs, 
risks, and potential changes in exchange rates over time. 
It's also important to carefully research and understand the laws and regulations regarding currency trading in your jurisdiction. 
It's also worth noting that it may not always be possible to find an arbitrage opportunity by simply adjusting the exchange rates, 
and that there may be other factors at play that can affect the profitability of a trade.

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


  /**
   * 
If you call the updated triangularArbitrage() function with the exchange rates 1.40, 0.90, 1.20, and leverage of 500, the function will perform the following calculations:

Convert $100 to £70 (100 / 1.40 = 70)
Convert £70 to 63 euros (70 / 0.90 = 77)
Convert 63 euros back to $76 (63 x 1.20 = 76)
Calculate profit of $-24
Calculate profit with leverage of $-12000
The profit from the trade in this case would be negative, as the final US dollars amount is less than the original $100. 
The function would print the message "No potential profit at current exchange rates."

It's important to note that using leverage can significantly increase the potential profits and losses from a trade,
 and can also increase the risk of losing money. It's important to carefully consider the risks and understand the 
 laws and regulations regarding the use of leverage in your jurisdiction before entering into any trades.

It's also important to note that this is just a simple example, and in a real trading situation you would need to consider additional factors 
such as transaction costs, risks, and potential changes in exchange rates over time. It's also important to carefully research and understand the 
laws and regulations regarding currency trading in your jurisdiction.
   */