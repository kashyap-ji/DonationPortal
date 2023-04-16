const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const projectdetailsSchema=new Schema({
    projectId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'project' },
    transactions:{
        transaction: {
            userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
            transactionId: { type: mongoose.Schema.Types.ObjectId, ref: 'transaction', required: true },
          },
    },
    collectedamount:{
        type:Number,
        default:0
    },
    mailingList: [{ type: String}],
    pdfDocument: {
        type:String,
      },
    detaildescription:{
        type:String,
    },

})

module.exports=mongoose.model("project_detail",projectdetailsSchema);