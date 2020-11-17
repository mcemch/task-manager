# Task Manager App

set ./config/dev.env

	PORT=3000
	SENDGRID_API_KEY=<secret>
	JWT_SECRET=<secret>
	MONGODB_URL=mongodb://127.0.0.1:27017/task-manager-api

then npm run dev
	 
for production, set

	heroku config:set SENDGRID_API_KEY=<secret>
	heroku config:set JWT_SECRET=<secret>
	heroku config:set MONGODB_URL=mongodb+srv://mcemch:<password>@cluster0.fwav6.mongodb.net/task-manager-api




