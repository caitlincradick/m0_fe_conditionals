// ```javascript
var goodDrivingRecord = true;
var age = 27;
// ```
// <!-- Write a program that evaluates the status of the variables above, and uses logic to print one of three possible messages:
// - If the driving record is good and user is over 25 years old, they should get a discount on the car rental
// - If the user either has a good record or is over 25 years old, they should pay full price
// - If the user is not over 25 and has a bad driving record, they need to have someone else sign for the rental -->

if (goodDrivingRecord === true && age >= 25) {
    console.log ("Good Job! You get a discount on your car rental");
} else if (goodDrivingRecord === true || age >= 25) {
    console.log ("You will be charged full price for this rental");
} else if (goodDrivingRecord === false && age <= 25) {
    console.log ("Co-signer required for the rental");
}

// After completing your selected challenge(s), create a short video to share with your Slack small group as part of your deliverable for this lesson. In your video, please:
// - Introduce the challenge
// - Demonstrate how to live-code the solution
// - Explain each line of code (this can be done while live-coding or after)
// - Show that the program works as intended by running the code (you should run the code more than once to prove it works for all logic paths)
// - Share a challenge or question you had when you solved it the first time