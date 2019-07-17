const mongoose = require('mongoose');

const lenderSchema = mongoose.Schema({
	companyName:{              // company name, all companies must be unique
		type: String,
		required:true,
		unique:true
	},
	minLoan:{                  // min loan amount this lender will accept
		type: Number,
		min:[0,"Negative Money Doesn't Exist"]
	},
	maxLoan:{                  // max loan amount this lender will accept
		type: Number
	},
	minFee:{                   // min fee this lender will charge
		type: Number,
		min:[0,"Everybody wants to be paid"]
	},
	maxFee:{                   // max fee this lender will charge
		type: Number
	},
	syndicate:{                // if this lender is willing to work with other lenders as a syndicate
		type: String,
		enum: ['Both','Lead','Secondary','None']
	},
	portfolioSize:{            // size of this lender's portfolio
		type: Number,
		min: 0
	},
	abStructure:{              // if this lender works with a/b structure, either true or false
		type: Boolean
	},
	notes:{                    // any notes that we have provided on this lender
		type: String
	},
	propertyTypes:{            // types of properties this lender will loan for, such as retail, hospital, golf course, etc. These are all assets based on the asset model, type: property type
		type: [String]
	},
	category:{                 // type of category this bank falls under. such as Foreign Bank, Domestic Bank, etc. These are all assets based on the asset model, type: category
		type: String
	},
	markets:{                  // which markets this lender works in. Such as Ontario, British Columbia, Alberta, etc. These are all assets based on the asset model, type: market
		type: [String]
	},
	portfolioMix:{             // Portfolio mix is the distribution of loan types this lender will do, an array of 4 numbers which add up to 100. The order is Term, Construction, Bridge, CMHC.
		type: [Number],
    	/*validate:{
    		validator: function(arr){
    			return (((arr[0] + arr[1] + arr[2] + arr[3]) === 100) || (arr === [0,0,0,0]));
    		},
    		message: "The distribution must equal 100%"	
    	},*/
    	default:[0,0,0,0]
	},
	status:{                    // is this lender still active in the marketplace
		type: String,
		enum:['Active','Inactive']
	},
	rating:{                    // this lender's rating, the latest rating is the current one
		type: [Number],
		min: 0,
		max: 100
	},
	defaultMainContacts:{              // list of usernames for the contacts
		type: [String]
	}







});

module.exports = mongoose.model('Lender', lenderSchema);