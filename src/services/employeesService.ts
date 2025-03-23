// src/services/employees.service.ts
import pool from '../db/db';
import {
    GET_ALL_EMPLOYEES,
    GET_ONBOARDING_EMPLOYEES,
    CREATE_EMPLOYEE,
    UPDATE_EMPLOYEE,
    DELETE_EMPLOYEE
} from '../queries/employees.queries';

export const getAllEmployees = async () => {
    const result = await pool.query(GET_ALL_EMPLOYEES);
    console.log(result.rows);
    return result.rows;
};

export const getOnboardingEmployees = async () => {
    const result = await pool.query(GET_ONBOARDING_EMPLOYEES);
    return result.rows;
};

export const createEmployee = async (data: any) => {
    const { user_id, designation, joining_date, department_id, supervisor_id, document_url } = data;
    const result = await pool.query(
        CREATE_EMPLOYEE,
        [user_id, designation, joining_date, department_id, supervisor_id, document_url]
    );
    return result.rows[0];
};

export const updateEmployee = async (id: number, data: any) => {
    const { designation, joining_date, department_id, supervisor_id, document_url } = data;
    const result = await pool.query(
        UPDATE_EMPLOYEE,
        [designation, joining_date, department_id, supervisor_id, document_url, id]
    );
    return result.rows[0];
};

export const deleteEmployee = async (id: number) => {
    await pool.query(DELETE_EMPLOYEE, [id]);
};
