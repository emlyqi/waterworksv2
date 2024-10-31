// need to sort based on preferences 
// how to differentiate between water fountains mathematically
// do i have to compare one user with every other user and then do that for all users... n^2 time
// need to think about so many cases like what if A matches with B who matches with C...

// i is each new user that will have own entry
// for (let i = 0; i < num_users; i++) {
//     // to go through the comparisons for i user 
//     for (let j = 0; j < num_users; j++){
//         //need to check if the user is themselves
//     }
// }

const usera = [40, 100, 20, 90];
const userb = [1, 1, 1, 1]
const userc = [100, 100, 20, 90];
const listUsers = [usera, userb, userc]
const matchMap = new Map();

//need to make a funciton to adjust list lengths
//let's just assume this is a list of the ratings for now (with fountains they have in common)
function matchScore (user1, user2){
    running_sum = 0;
    counter = 0;
    for (let i = 0; i < user1.length; i++){
        fountain_score = 100 - Math.abs(user1[i] - user2[i]);
        running_sum = running_sum + fountain_score;
        counter++;
    }

    average = running_sum/counter
    return average
}

//makes the list of matches for each user
function matchesList (userList){
    //another for loop outside to go through every user 
    for (let i = 0; i < userList.length; i++){
        /*if (userID from UserList[i] != current user's ID){
            
        }
        */
        matchMap.set(i, (matchScore(usera, listUsers[i]))); //need to change usera to something depending on outer for loop index
    }
    sortedMap = Array.from(matchMap).sort((a, b) => b[1] - a[1]); //shouldbe in external thing and then add this to a list
    return sortedMap //change to return a list of maps
}
//sort the matches
// 

console.log(matchScore(usera, userb))
console.log(matchScore(userb, userc))
console.log(matchScore(usera, userc))
console.log(matchesList(listUsers))
