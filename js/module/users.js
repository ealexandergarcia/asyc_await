export const getAllUsers = async () => {
  let res = await fetch("http://172.16.101.146:5804/users");
  let data = await res.json();
  return data;
};

const validateGetUser = async(userId) =>{
    if (typeof userId !== "string" || userId === undefined) return { status: 406, message: ` The data ${userId} is not arriving or does not comply with the requiered format` }
  }
export const getUser = async (arg) => {
    let val = await validateGetUser(arg);
    if (val) return val;
    let res = await fetch(`http://172.16.101.146:5804/users/${arg}`);
    if(res.status === 404) return { status: 204, message: `Username does not exist` }
    let data = await res.json();
    return data;
  };

  const validateAddUser = async ({ name, username, email, address, phone, website, company}) => {
    if (typeof name !== "string" || name === undefined) return { status: 406, message: `The data name is not arriving or does not comply with the required format` }
    if (typeof username !== "string" || username === undefined) return { status: 406, message: `The data username is not arriving or does not comply with the required format` }
    if (typeof email !== "string" || email === undefined) return { status: 406, message: `The data email is not arriving or does not comply with the required format` }
    if (typeof address !== "object" || address === undefined) return { status: 406, message: `The data address is not arriving or does not comply with the required format` }
    if (typeof phone !== "string" || phone === undefined) return { status: 406, message: `The data phone is not arriving or does not comply with the required format` }
    if (typeof website !== "string" || website === undefined) return { status: 406, message: `The data website is not arriving or does not comply with the required format` }
    if (typeof company !== "object" || company === undefined) return { status: 406, message: `The data company is not arriving or does not comply with the required format` }
  }
  
  export const addUser = async (arg) => {
    let val = await validateAddUser(arg);
    if (val) return val;
    let config = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(arg)
    };
    let res = await fetch("http://172.16.101.146:5804/users", config);
    let data = await res.json();
    return data;
  };
  const validateUpdateUser = async ({ name, username, email, address, phone, website, company, userId}) => {
    if (typeof name !== "string") return { status: 406, message: `The data name is not arriving or does not comply with the required format` }
    if (typeof username !== "string") return { status: 406, message: `The data username is not arriving or does not comply with the required format` }
    if (typeof email !== "string" ) return { status: 406, message: `The data email is not arriving or does not comply with the required format` }
    if (typeof address !== "object" ) return { status: 406, message: `The data address is not arriving or does not comply with the required format` }
    if (typeof phone !== "string" ) return { status: 406, message: `The data phone is not arriving or does not comply with the required format` }
    if (typeof website !== "string" ) return { status: 406, message: `The data website is not arriving or does not comply with the required format` }
    if (typeof company !== "object" ) return { status: 406, message: `The data company is not arriving or does not comply with the required format` }
    if (!userId || typeof userId!== "string") throw { status: 406, message: `The data userId is not arriving or does not comply with the required format` }
  }
  export const updateUser = async(arg)=>{
    let val = await validateUpdateUser(arg);
    if (val) return val;
    let config = {  
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(arg)
    };
    let res = await fetch(`http://172.16.101.146:5804/users/${arg.userId}`, config);
    let data = await res.json();
    return data;
  }

  const validatePatchUser = async ({ name, username, email, address, phone, website, company }) => {
    let errors = {};
  
    if (name!== undefined) {
      if (typeof name!== "string") {
        errors.name = `The data name is not arriving or does not comply with the required format`;
      }
    }
  
    if (username!== undefined) {
      if (typeof username!== "string") {
        errors.username = `The data username is not arriving or does not comply with the required format`;
      }
    }
  
    if (email!== undefined) {
      if (typeof email!== "string") {
        errors.email = `The data email is not arriving or does not comply with the required format`;
      }
    }
  
    if (address!== undefined) {
      if (typeof address!== "object") {
        errors.address = `The data address is not arriving or does not comply with the required format`;
      }
    }
  
    if (phone!== undefined) {
      if (typeof phone!== "string") {
        errors.phone = `The data phone is not arriving or does not comply with the required format`;
      }
    }
  
    if (website!== undefined) {
      if (typeof website!== "string") {
        errors.website = `The data website is not arriving or does not comply with the required format`;
      }
    }
  
    if (company!== undefined) {
      if (typeof company!== "object") {
        errors.company = `The data company is not arriving or does not comply with the required format`;
      }
    }
  
    if (Object.keys(errors).length > 0) {
      return { status: 406, message: "Error en los datos", errors };
    }
  }
  
  export const patchUser = async (arg) => {
    let val = await validatePatchUser(arg);
    if (val) {
      return val;
    }
    let { id } = arg;
    let config = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(arg)
    };
    let res = await fetch(`http://172.16.101.146:5804/users/${id}`, config);
    let data = await res.json();
    return data;
  }
  export const deleteUser = async(userId)=>{
    let config = {  
      method: "DELETE"
    };
    let res = await fetch(`http://172.16.101.146:5804/users/${userId}`, config);
    if(res.status ===404) return {status: 204, message:"the album id does not exist or has an unaccepted format"}
    let data = await res.json();
    data.status = 202;
    data.message =`The album ${userId} was deleted from the database`
    return data;
  }
  