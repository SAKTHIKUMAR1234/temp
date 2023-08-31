const { instanceofDB } = require('../models/connection')


const getUsers = async () => {
    try {
        const con = instanceofDB();
        const result = await con.query('select * from Userdetails order by dateofupdation desc limit 10');
        return result.rows;
    } catch (error) {
        return error

    }
}

const updateUser = async (data) => {


    try {
        const con = instanceofDB();
        const result = await con.query('update userdetails set fname=$1,lname=$2,mobile=$3,dob=$4,address=$5,dateofupdation=current_timestamp where email=$6', data);
        return result;
    } catch (error) {
        return error;
    }


}


const addUser = async (data) => {
    try {
        const con = instanceofDB();
        const result = await con.query('insert into Userdetails (email,fname,lname,mobile,dob,address) values ($1,$2,$3,$4,$5,$6)', data);
        return result;
    } catch (error) {
        return error;
    }

}

module.exports = {
    getUsers, updateUser, addUser
}