async function loadAndShowUsers() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const userContainer = document.getElementById('userContainer');
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error!: ${response.status}`);
        }
        const users = await response.json();

        userContainer.innerHTML = ''; // innitialize
        users.forEach(user => {
            const usercard = document.createElement('div');
            usercard.classList.add('user-card');
            usercard.innerHTML = `
            <div class="user-header">
              <div class="image-placeholder"></div>
              <h3>${user.name}</h3>
            </div>
            <p><strong>Username:</strong> ${user.username}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
            <p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
            <p><strong>Company:</strong> ${user.company.name}</p>
            <p><strong>Catchphrase:</strong> "${user.company.catchPhrase}"</p>
            <p><strong>Bs:</strong> "${user.company.bs}"</p>
            <p><strong>Zipcode:</strong> "${user.address.zipcode}"</p>
            <p><strong>Lat:</strong> "${user.address.geo.lat}"</p>
            <a href="#" class="invite-btn">Invite</a>
            `
          userContainer.appendChild(usercard);
        });
    } catch(err) {
        console.log(`Error!: ${err}`)
    }
}
loadAndShowUsers()


// "id": 1,
// "name": "Leanne Graham",
// "username": "Bret",
// "email": "Sincere@april.biz",
// "address": {
//     "street": "Kulas Light",
//     "suite": "Apt. 556",
//     "city": "Gwenborough",
//     "zipcode": "92998-3874",
//     "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//     }
// },
// "phone": "1-770-736-8031 x56442",
// "website": "hildegard.org",
// "company": {
//     "name": "Romaguera-Crona",
//     "catchPhrase": "Multi-layered client-server neural-net",
//     "bs": "harness real-time e-markets"
// }