const proFile = document.querySelector('#bigBody')

fetch('https://randomuser.me/api/?results=30')
    .then((resp) => resp.json())
    .then(function (data) {
        let users = data.results;
        console.log(users);
        // console.log(users[0].nat);
        // exit();
        return users.map((user) => {

            const mainCard = document.createElement('div');
            const subCard = document.createElement('div');
            const bodyFrame = document.createElement('div');
            const cardBody = document.createElement('div');
            const rec = document.createElement('div');
            const cardImg = document.createElement('div');
            const profilePix = document.createElement('img');
            const profName = document.createElement('h5');
            const p1 = document.createElement('p');
            const p2 = document.createElement('p');
            const p3 = document.createElement('p');

            mainCard.appendChild(subCard);
            subCard.append(rec, cardImg, bodyFrame);
            bodyFrame.appendChild(cardBody);
            cardImg.appendChild(profilePix);
            proFile.appendChild(mainCard);


            mainCard.classList.add("card", "ab-3");
            subCard.classList.add("row", "g-0");
            rec.classList.add("col-md-2");
            cardImg.classList.add("col-md-3");
            bodyFrame.classList.add("col-md-5");
            cardBody.classList.add("card-body");
            profilePix.classList.add("img-fluid", "profileImg");


            // let image = li.appendChild(img);
            let firstName = user.name.first;
            let lastName = user.name.last;
            let heading = cardBody.appendChild(profName);
            let eMail = cardBody.appendChild(p1);
            let email = user.email;
            let city = user.location.city;
            let nat = user.nat;
            let ciTy = cardBody.appendChild(p2)
            let naT = cardBody.appendChild(p3)

            //  paragraph.innerHTML = firstname + " " lastname)
            heading.innerHTML = `${firstName} ${lastName}`;
            eMail.innerHTML = ` Email: ${email}`;
            p2.innerHTML = `City: ${city}`;
            p3.innerHTML = `Nationality: ${nat}`;

         
            profilePix.src = user.picture.large;
        });
    })
    .catch(function (error) {
        console.log(error);
    });