$(document).ready(function(){

const quotes=["It always seems impossible until it's done","It does not matter how slowly you go as long as you do not stop","Failure will never overtake me if my determination to succeed is strong enough","The past cannot be changed. The future is yet in your power","With the new day comes new strength and new thoughts","Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence","Change your life today. Don't gamble on the future, act now, without delay","Life is 10% what happens to you and 90% how you react to it","Good, better, best. Never let it rest.Til your good is better and your better is best","Only I can change my life. No one can do it for me","When you want to succeed as bad as you want to breathe, then you’ll be successful","Hard work beats talent when talent doesn’t work hard"];

$("#new-quote").click(function(){
  var randomNumber=Math.floor(Math.random() * (quotes.length));
document.getElementById("text").innerHTML =quotes[randomNumber];
});
