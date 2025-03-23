import express from 'express';
import { getEmployees, getOnboardingEmployees, createEmployee, updateEmployee, deleteEmployee } from '../controllers/EmployeesController';
// import auth from '../middleware/auth';
// import authorize from '../middleware/authorizeRole';

const router = express.Router();

router.get('/', getEmployees);
router.get('/onboarding', getOnboardingEmployees);
router.post('/', createEmployee);
router.put('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);

// router.get('/', auth, authorize(['Admin', 'Super_Admin']), getEmployees);
// router.get('/onboarding', auth, authorize(['Admin', 'Super_Admin']), getOnboardingEmployees);
// router.post('/', auth, authorize(['Admin', 'Super_Admin']), createEmployee);
// router.put('/:id', auth, authorize(['Admin', 'Super_Admin']), updateEmployee);
// router.delete('/:id', auth, authorize(['Admin', 'Super_Admin']), deleteEmployee);

export default router;