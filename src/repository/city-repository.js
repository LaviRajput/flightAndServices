const{City}=require('../models/index');

class CityRepository{
// There is a Function For Creating a city In the city table
async CreateCity(data) {
    try {
        if (!data || !data.name) {
            throw new Error("City name is required");
        }
        const city = await City.create({ name: data.name });
        return city;
    } catch (error) {
        throw error;
    }
}
  // There is a function for delete a city from database
 async deleteCity(cityId){
  try{
  await City.destroy({
    where:{
      id:cityId
    }
  });
  return true;
  }catch (error){
    throw(error);
  }
 }
// There is a function for Update the city in database
async updateCity(cityId,cityData){
  try{
    const city=await City.update(cityData,{
      where:{
        id:cityId
      }
    });
    return city;
  }catch (error){
    throw(error);
  }

}
// There is a function for get the city from database
async getCity(cityId){
  try{
    const city=await City.findOne({
      where:{
        id:cityId
      }
    });
    return city;
  }catch (error){
    throw(error);
  }
}
}
module.exports=CityRepository;