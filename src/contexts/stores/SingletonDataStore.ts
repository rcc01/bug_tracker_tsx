import { RowDataTicket } from '../../components/TicketsTable/TicketsTable';
import { RowDataEmployee } from '../../components/Employees/EmployeesTable';
import RowData from '../../components/Table/RowData';

class DataStoreClass {
  private projects: RowData[];
  private tickets: RowDataTicket[];
  private employees: RowDataEmployee[];

  constructor() {
    this.projects = [];
    this.tickets = [];
    this.employees = [];
  }

  // PROJECTS
  // 1. Create & update
  createUpdateProjects(inputProjects: RowData) {
    const index = this.projects.findIndex(
      (project) => project.id === inputProjects.id
    );
    if (index > -1) {
      this.projects[index] = inputProjects;
    } else {
      this.projects.push(inputProjects);
    }
  }

  // 2. Read
  readProjects(): RowData[] {
    return this.projects;
  }

  readProject(id: string): RowData | null {
    const index = this.projects.findIndex((project) => project.id === id);
    if (index > -1) {
      this.projects[index];
    }
    return null;
  }

  // 3. Delete

  deleteProject(id: string) {
    this.projects = this.projects.filter((project) => project.id !== id);
  }

  // TICKETS

  // 1. Create & update
  createUpdateTickets(inputTickets: RowDataTicket) {
    const index = this.tickets.findIndex(
      (tickets) => tickets.id === inputTickets.id
    );
    if (index > -1) {
      this.tickets[index] = inputTickets;
    } else {
      this.tickets.push(inputTickets);
    }
  }

  // 2. Read
  // TODO
  readTickets(): RowDataTicket[] {
    return this.tickets;
  }

  readTicket(id: string): RowDataTicket | null {
    const index = this.tickets.findIndex((ticket) => ticket.id === id);
    if (index > -1) {
      this.tickets[index];
    }
    return null;
  }

  // 3. Delete
  deleteTicket(id: string) {
    this.tickets = this.tickets.filter((ticket) => ticket.id !== id);
  }

  // EMPLOYEES

  // 1. Create & update
  // reutilizo creaUpdateEmployee in CardEmployee
  createUpdateEmployee(inputEmployee: RowDataEmployee) {
    const index = this.employees.findIndex(
      (employee) => employee.id === inputEmployee.id
    );
    if (index > -1) {
      // from 0 onwards...
      // coloca el inputEmployee en ese index, inputEmployee va a tener ese index
      // index = 0 => inputEmployee[0]
      // index = 1 => inputEmployee[1]
      this.employees[index] = inputEmployee;
    } else {
      // if it isn't there - push it into this.employees -
      // if index === -1
      this.employees.push(inputEmployee);
    }
  }

  // 2. Read
  readEmployees(): RowDataEmployee[] {
    return this.employees;
  }

  readEmployee(id: string): RowDataEmployee | null {
    const index = this.employees.findIndex((employee) => employee.id === id);
    if (index > -1) {
      this.employees[index];
    }
    return null;
  }

  // 3. Delete
  deleteEmployee(id: string) {
    this.employees = this.employees.filter((employee) => employee.id !== id);
  }
}

const dataStore = new DataStoreClass();
export default dataStore;
export { DataStoreClass };
