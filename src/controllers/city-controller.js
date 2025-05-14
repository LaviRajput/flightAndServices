const {CityService}=require('../services/index');
const cityService=new CityService();
// Create Service

const create=async(req,res)=>{
  try {
    const city=await cityService.createCity(req.body);
    return res.status(201).json({
      data:city,
      success:true,
      message:'city created successfully',
      error:{}
    });
  } catch (error) {
    console.log('error while creating city',error);
    return res.status(500).json({
      data:null,
      success:false,
      message:'Not able to create city',
      error:error.message
    });
  }}
  // Delete Service

  const destroy=async(req,res)=>{
    try {
      const response=await cityService.deleteCity(req.params.cityId);
      return res.status(200).json({
        data:response,
        success:true,
        message:'city deleted Successfully',
        error:{}
      });
    } catch (error) {
    console.log('error while deleting city',error);
    return res.status(500).json({
       data:{},
       success:false,
       message:'Not able to delete city',
       error:error.message
});
    }
  }
  // Update Service

  const update=async(req,res)=>{
    try {
      const city=await cityService.updateCity(req.params.cityId,res.body);
      return res.status(200).json({
        data:city,
        success:true,
        message:'city updated successfully',
        error:{}
      });
    } catch (error) {
      console.log('error while updating city',error);
      return res.status(500).json({
        data:{},
        success:false,
        message:'Not able to update city',
        error:error.message
      });
    }
  }
  // Get Service

  const get=async(req,res)=>{
    try {
      const city=await cityService.getCity(req.params.cityId);
      return res.status(200).json({
        data:city,
        success:true,
        message:'city fetched successfully',
        error:{}
      });
    } catch (error) {
      console.log('error while getting city',error);
      return res.status(500).json({
        data:{},
        success:false,
        message:'Not able to get city',
        error:error.message
      });
    }
  };
  // Exporting all handlers
  module.exports={
    create,
    destroy,
    update,
    get
  };

