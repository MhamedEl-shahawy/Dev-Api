// @desc Get all bootcamps
// @route Get/api/v1/bootcamps
// @access Public
exports.getBootcamps = (req,res,next)=>{
      res.status(200).json({success:true,msg:"Show all bootcamps"}); 

}

// @desc Get all bootcamps
// @route Get/api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = (req,res,next)=>{
    res.status(200).json({success:true,msg:`Get bootcamp ${req.params.id}`}); 
}

// @desc    create new bootcamp
// @route   Post/api/v1/bootcamps/
// @access  Private
exports.createBootcamp = (req,res,next)=>{
     res.status(200).json({success:true,msg:"Create new bootcamps"});  
}

// @desc    Update  bootcamp
// @route   Put/api/v1/bootcamps/:id
// @access  Private
exports.UpdateBootcamp = (req,res,next)=>{
    res.status(200).json({success:true,msg:`Update bootcamp ${req.params.id}`}); 
}

// @desc    Delete  bootcamp
// @route   Delete/api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = (req,res,next)=>{
    res.status(200).json({success:true,msg:`Delete bootcamp ${req.params.id}`}); 
}