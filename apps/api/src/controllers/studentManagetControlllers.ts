import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

// Get student profile by ID
export const getStudentProfileById = async (req: Request, res: Response) => {
  const { id } = req.params;
  if(!id)
  return res.status(400).json({ message: 'Student profile ID is required' })
  try {
    const studentProfile = await prisma.studentProfile.findUnique({
      where: { id }
    });
    if (!studentProfile) {
      return res.status(404).json({ message: 'Student profile not found' });
    }
    res.json(studentProfile);
  } catch (error) {
    console.error('Error fetching student profile:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Create a new student profile
export const createStudentProfile = async (req: Request, res: Response) => {
  const { userId, enrollmentId, batch, department, semester, section, bio, location, website, linkedin, github } = req.body;
  try {
    const studentProfile = await prisma.studentProfile.create({
      data: {
        user: { connect: { id: userId } },
        enrollmentId,
        batch,
        department,
        semester,
        section,
        bio,
        location,
        website,
        linkedin,
        github
      }
    });
    res.status(201).json(studentProfile);
  } catch (error) {
    console.error('Error creating student profile:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Update an existing student profile
export const updateStudentProfile = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { bio, location, website, linkedin, github } = req.body;
  try {
    const updatedProfile = await prisma.studentProfile.update({
      where: { id },
      data: {
        bio,
        location,
        website,
        linkedin,
        github
      }
    });
    res.json(updatedProfile);
  } catch (error) {
    console.error('Error updating student profile:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


export const deleteStudentProfile = async (req: Request, res: Response) => {
const { id } = req.params;
try {
    await prisma.studentProfile.delete({
        where: { id }
    });
    res.status(204).end();
} catch (error) {
    console.error('Error deleting student profile:', error);
    res.status(500).json({ message: 'Internal server error' }); // Add a semicolon at the end of this line
}
  }

