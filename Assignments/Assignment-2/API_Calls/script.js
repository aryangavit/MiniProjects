const spinner = document.querySelector('.spinner');
const tableBody = document.querySelector(".user-container");

tableBody.style.display = 'none';

setTimeout(() => {
            spinner.style.display = 'none';
            tableBody.style.display = 'block';
}, 2000);

async function fetchUserData() {
const response = await fetch("https://reqres.in/api/users");
const usersData = await response.json();

const usersArray = Array.isArray(usersData.data) ? usersData.data : [];
return usersArray;
}

async function fetchUsersTable() {
try {
    const users = await fetchUserData();
    console.log(users);

    const userTableBody = document.querySelector('.table-body');

    for (let user of users) {
        const row = document.createElement('tr');
        const userID = document.createElement('td');
        userID.textContent = user.id;
        row.appendChild(userID);

        const avatar = document.createElement('td');
        const avatarImage = document.createElement('img');
        avatarImage.src = user.avatar;
        avatar.appendChild(avatarImage);
        row.appendChild(avatar);
        
        const name = document.createElement('td')
        name.textContent = user.first_name +" "+ user.last_name;
        row.appendChild(name)
        

        const email = document.createElement('td')
        email.textContent = user.email;
        row.appendChild(email)


        userTableBody.appendChild(row);
    }
} catch (error) {
    console.error("Can't fetch data: ", error);
}
}

fetchUsersTable();