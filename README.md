# **Pokemon API-Side**
This part of the project is the API side where the data is being held and stored.

## **Description**
For this last project I decided to do something related with Pokemon where a user can create thier own pokemon by filling out the name, the type of the Pokemon, the attack it has and its weakness. The user can also update thier pokemon as well as delete too. They can also view all the Pokemon they created as well. A user can only create a Pokemon, update it, view it if they are signed in. The user should be able to sign-up successfully, sign-in successfully, change thier password successfully and sign out as well.

## **Development Process**
Before I started with the coding, I started out by creating a wireframe for the project as to how I would make the front-end or how I would like it to be. I also started by writing out user stories as well. Both the wireframes and the user stories helped me stay focus and on track with completing the requirements needed for the project. Then I started coding out the project little by little until it was completed. I did run into some complications where I was getting errors and trying to see why I was getting those errors. I solved a few errors on my own, while for other errors I seeked help.

## **Setup Steps**
If you wish to run this project locally and get it working, you can follow the following steps:

1. [Fork and Clone](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone) this
repository.
2. Run `npm install` to install dependencies
3. Use `npm run serve` to view the app in the browser

### **Important Links** 👇
- Link to API repo: [Pokemon-API Repo](https://github.com/Nancy4510/pokemon-api)
- Link to client repo: [Pokemon-Client Repo](https://github.com/Nancy4510/pokemon-client)
- Link to the deployed back-end: [Deployed Back-End](https://enigmatic-brook-22865.herokuapp.com/)
- Link to the deployed site: [Pokemon](https://nancy4510.github.io/pokemon-client/#//)

## **User Stories**
- As a user, I want to be able to sign-up successfully.

- As a user, I want to be able to sign-in successfully.

- As a user, I want to be able to change my password successfully.

- As a user, I want to be able to sign-out successfully.

- As a user, I want to be able to create a Pokemon.

- As a user, I want to be able to update a Pokemon.

- As a user, I want to be able to view all Pokemon.

- As a user, I want to be able to view a signle Pokemon.

- As a user, I want to be able to delete a Pokemon.

## **Technologies Used**
- CSS/SASS

- Express

- Heroku

- MongoDB

- Mongoose

- React

- React Hooks

## **API Repository**
- Link to API repo: [Pokemon-API Repo](https://github.com/Nancy4510/pokemon-api)
- Link to client repo: [Pokemon-Client Repo](https://github.com/Nancy4510/pokemon-client)
- Link to the deployed back-end: [Deployed Back-End](https://enigmatic-brook-22865.herokuapp.com/)
- Link to the deployed site: [Pokemon](https://nancy4510.github.io/pokemon-client/#//)

## **Routes**
### **User**

| HTTP | CRUD | URL | Action |
| ----------- | - | ----------- | ----------- |
| POST | CREATE |/sign-up| app.post()/sign-up |
| POST | CREATE |/sign-in| app.post()/sign-in |
| PATCH  | UPDATE  | /change-password | app.patch()/change-password|
| DELETE   | DELETE  | /sign-out | app.delete()/sign-out |

### **Pokemon**

| HTTP | CRUD | URL | Action |
| ----------- | - | ----------- | ----------- |
| POST | CREATE |/pokemons| app.post()/create |
| GET | READ |/pokemons| app.get()/index |
| GET  | READ | /pokemons/:id  | app.get()/show |
| PATCH  | UPDATE  | /pokemons/id:edit |app.patch()/update|
| DELETE   | DELETE  | /pokemons/:id | app.delete()/destroy |

## **Entity Relationship Diagram**
**ERD to back-end**

![Project4ERD](Project4ERD.png)
