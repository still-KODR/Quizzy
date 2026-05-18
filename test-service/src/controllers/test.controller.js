export const createTest = async (req, res) => {
  res.status(201).json({
    success: true,
    message: "Create Test Controller",
  });
};

export const getAllTests = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Get All Tests Controller",
  });
};

export const getTestById = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Get Test By ID Controller",
  });
};

export const updateTest = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Update Test Controller",
  });
};

export const deleteTest = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Delete Test Controller",
  });
};

export const publishTest = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Publish Test Controller",
  });
};

export const cancelTest = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Cancel Test Controller",
  });
};