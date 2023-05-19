var username=prompt('Enter UserName:');
var password=prompt('Enter Password:');

const database=[
    {
        username:'Chai',
        password:'SuperSecret',
        timeline: [{
            username:'Sreepad',
            post:'it\'s very boring!'
        },
        {
            username:'Rajesh',
            post:'I am interested in doing M.S!'
        }]
    },
    {
        username:'Sreepad',
        password:'Secret',
        timeline: [{
            username:'Chai',
            post:'I am feeling like hell!'
        },
        {
            username:'Meena',
            post:'I wanna a break!'
        }]
    },
    {
        username:'Meena',
        password:'Secret',
        timeline: [{
            username:'Sreepad',
            post:'I love Data Science'
        },
        {
            username:'Rajesh',
            post:'I wanna go to Miami beach!'
        }]
    }];

function signIn(username, password)
{
    for (user in database){
        posts=[]
        if (database[user].username==username & database[user].password==password){
            let template_header=`<h1>Welcome ${username}!`+"</h1>"+"<h1>Your Timeline:</h1><br/>";
            let template_string=""
            for (timeline in database[user].timeline){
                template_string+=`${database[user].timeline[timeline].username +"-->"+database[user].timeline[timeline].post}`+"<br/>";
            }
            document.getElementById('id').innerHTML=template_header+template_string;
            break;
        }
        else{
            document.getElementById('id').innerHTML=`<h1>You have entered wrong username or password for ${user.username}</h1>`
        }

    }
}

signIn(username,password);