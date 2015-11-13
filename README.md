## 13.11.15
finished the tutorial and managed to develop a rough slack clone.
the tutorial was helpful to understand the core architecture of meteor, but there were many mistakes inside.
i think i need some more tutorials/information about meteor to write "clean" code in the future.

next steps:

- [ ] structure the database -> UML
- [ ] combine the tables "USER", "TEAM", "TEAM-USER"


| USER     | TEAM-USER | TEAM |
|----------|-----------|------|
| id       | id        | id   |
| name     | user_id   | name |
| password | team_id   |      |
| email    |           |      |
| team     |           |      |

[http://bandkit.meteor.com](http://bandkit.meteor.com)

## 12.11.15

started to write my own bandkit app.
i need to get familiar with meteor and understand the core architecture of the framework.
for doing that i try to develop a slack (messenger) clone via a tutorial.

[http://bandkit.meteor.com](http://bandkit.meteor.com)

## 11.11.15

- [x] install node.js 
- [x] install meteor
- [x] write my first app
- [x] deploy the app

[http://t1000.meteor.com](http://t1000.meteor.com)

- - - 

## Full-Stack JavaScript

- [x] JavaScript Basics *6 hours*
- [x] JavaScript Loops, Arrays and Objects *4 hours*
- [x] *~~jQuery Basics 4 hours*~~
- [x] *~~Using jQuery Plugins 94 minutes*~~
- [x] *~~Interactive Web Pages with JavaScript 2 hours*~~
- [x] *~~AJAX Basics 5 hours*~~
- [x] Object-Oriented JavaScript *2 hours*
- [x] Node.js Basics *2 hours*
- [x] Build a Simple Dynamic Site with Node.js *2 hours*
- [x] npm Basics *48 minutes*
- [x] *~~Express Basics 3 hours*~~
- [x] *~~Gulp Basics 2 hours*~~
 
- - -

## Master Project / Bandkit

Bandkit is a webbased management tool for bands.
It helps sharing data as well as information with different people and organizing internal band affairs.

## Release I:

### Different usergroups ( User-ID, E-Mail, Name)
	- Bandmembers 	
	- Booking
	- Management
	- Sound engineer / light engineer / merch

### Calendar (id, group-id, date, time, venue,…)
	- Subject: Gig, Studio, Rehearsalrsal  
	- Date
	- Time
	- Venue
	- transfer
	- accommodation

### File management system 
	- Folders
	- Files
	- Storage?

### Chat
	- Instant-Messaging
	- Single
	- Group

### Email notification
	- new file
	- new message
	- new event

### Public Website to share (based on the filesystem)
	- Songs
	- Images
	- Biography (Links: Facebook, Soundcloud, Website, …)

### Different Plans
	- free plan (limited: usergroups, amount of users, storage, no notifications)
	- Premium (cash?! - more storage, more users, more usergroups)

- - - 

## Release II:


- Reply via Email (Email notification)
- Shopoverview (inventory: article, quantity)
- Financial System (bank account, inventory)
- Public Website to share (based on the filesystem)
- File management system 

- …

- - -

## Release III (Future):

- Different Apps 