import { Request, Response } from 'express';
import * as employeeService from '../services/employeesService';

export const getEmployees = async (req: Request, res: Response) => {
    try {
        const employees = await employeeService.getAllEmployees();
        res.json(employees);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch employees' });
    }
};

export const getOnboardingEmployees = async (req: Request, res: Response) => {
    try {
        const employees = await employeeService.getOnboardingEmployees();
        res.json(employees);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch onboarding employees' });
    }
};

export const createEmployee = async (req: Request, res: Response) => {
    try {
        const employee = await employeeService.createEmployee(req.body);
        res.status(201).json(employee);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create employee' });
    }
};

export const updateEmployee = async (req: Request, res: Response) => {
    try {
        const updated = await employeeService.updateEmployee(Number(req.params.id), req.body);
        res.json(updated);
    } catch (err) {
        res.status(500).json({ error: 'Failed to update employee' });
    }
};

export const deleteEmployee = async (req: Request, res: Response) => {
    try {
        await employeeService.deleteEmployee(Number(req.params.id));
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete employee' });
    }
};