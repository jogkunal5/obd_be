"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEmployee = exports.updateEmployee = exports.createEmployee = exports.getOnboardingEmployees = exports.getAllEmployees = void 0;
// src/services/employees.service.ts
const db_1 = __importDefault(require("../db/db"));
const employees_queries_1 = require("../queries/employees.queries");
const getAllEmployees = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.default.query(employees_queries_1.GET_ALL_EMPLOYEES);
    console.log(result.rows);
    return result.rows;
});
exports.getAllEmployees = getAllEmployees;
const getOnboardingEmployees = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.default.query(employees_queries_1.GET_ONBOARDING_EMPLOYEES);
    return result.rows;
});
exports.getOnboardingEmployees = getOnboardingEmployees;
const createEmployee = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_id, designation, joining_date, department_id, supervisor_id, document_url } = data;
    const result = yield db_1.default.query(employees_queries_1.CREATE_EMPLOYEE, [user_id, designation, joining_date, department_id, supervisor_id, document_url]);
    return result.rows[0];
});
exports.createEmployee = createEmployee;
const updateEmployee = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const { designation, joining_date, department_id, supervisor_id, document_url } = data;
    const result = yield db_1.default.query(employees_queries_1.UPDATE_EMPLOYEE, [designation, joining_date, department_id, supervisor_id, document_url, id]);
    return result.rows[0];
});
exports.updateEmployee = updateEmployee;
const deleteEmployee = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield db_1.default.query(employees_queries_1.DELETE_EMPLOYEE, [id]);
});
exports.deleteEmployee = deleteEmployee;
