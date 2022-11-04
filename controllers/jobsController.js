const getAllJobs = async (req, res) => {
  res.send("Get All jobs");
};

const createJob = async (req, res) => {
  res.send("Job created");
};

const updateJob = async (req, res) => {
  res.send("Update created");
};

const deleteJob = async (req, res) => {
  res.send("Delete created");
};

const showStats = async (req, res) => {
  res.send("Show Stats");
};

export { getAllJobs, createJob, deleteJob, showStats, updateJob };
