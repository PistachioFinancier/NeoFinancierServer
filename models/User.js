const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {              // username of the account, this will be unique, no 2 users can have the same user name. This will not be the same as the user's email!
    	type:String,
    	required:true,
    	unique:true
    },
    password: {              // password to access the account
    	type: String,
    	required: true
    },
    company:{                // the company the user belongs to
    	type: String,
    	required: true
    },
    firstName:{              // user's first name
    	type: String,
    	required: true
    },
    lastName:{               // user's last name
    	type: String,
    	required: true
    },
    email:{                  // user's email
    	type: String
    },
    phoneNumber:{            // user's phone number
    	type: String
    },
    level:{                  // user's level in the heirarchy. Babies can see deals/write deals but not send. Mommies can send and manage their own baby users. Daddy can do all.
		type: String,
    	enum: ['Baby', 'Mommy', 'Daddy'],
    	required: true
    },
    type:{                   // user type
    	type: String,
    	enum: ['Lender','Borrower','Mortgage-Broker','Agent','Privileged-User','Consultant']
    },
    userToken:{              // token saved for authenticating sessions. Might be removed later on for Passport.Js
    	type: String
    },
    status:{                 // status of the user. If Resource then they are not using our system but may eventually use it. Resource is mainly for lender contacts.
    	type: String,
    	enum: ['Active','Inactive','Resource']
    },
    createdDate:{            // date the account was created.
    	type: Date,
        default: Date.now
    },
    lastUpdate:{             // last date the user was updated.
    	type:Date,
    	default: Date.now
    }


});

module.exports = mongoose.model('User', userSchema);
