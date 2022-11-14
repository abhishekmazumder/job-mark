import Job from "../models/Job.js";
import { StatusCodes } from "http-status-codes";
import {
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
} from "../errors/index.js";
import asyncHandler from "express-async-handler";

const getAllJobs = asyncHandler(async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId });
  res.status(StatusCodes.OK).json({ jobs, totalJobs: jobs.length, numOfPages: 1 });
});

const createJob = asyncHandler(async (req, res) => {
  const { position, company } = req.body;
  if (!position || !company) {
    throw new BadRequestError("Please provide all values");
  }
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
});

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
