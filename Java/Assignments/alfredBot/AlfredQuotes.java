import java.util.Date;
public class AlfredQuotes {
    
    public String basicGreeting() {
        // You do not need to code here, this is an example method
        return "Hello, lovely to see you. How are you?";
    }
    
    public String guestGreeting(String name) {
        // YOUR CODE HERE
        return String.format("Hello, %s lovely to see you." ,name);
    }
    
    public String dateAnnouncement() {
        // YOUR CODE HERE
        // return "place holder for date announcement return string";
        Date date = new Date();
        return "Today's date is: "+ date;
        
    }
    
    public String respondBeforeAlexis(String conversation) {
        // YOUR CODE HERE
        if (conversation.contains("Alexis")) {
            return "Right away, sir. She certainly isn't sophisticated enough for that.";
        }
        if (conversation.contains("Alfred")) {
            return "At your service. As you wish, naturally.";
        }
        return "Right. And with that I shall retire." ;
        
    }
    
	// NINJA BONUS
	// See the specs to overload the guessGreeting method
    // SENSEI BONUS
    // Write your own AlfredQuote method using any of the String methods you have learned!
}