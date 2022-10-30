import { RowDataTicket } from "../../components/TicketsTable/TicketsTable";
import { RowDataEmployee } from "../../components/Employees/EmployeesTable";
import RowData from "../../components/Table/RowData";

class DataStoreClass {
  private projects: RowData[];
  private tickets: RowDataTicket[];
  private employees: RowDataEmployee[];

  constructor() {
    this.projects = [];
    this.tickets = [];
    this.employees = [];
  }
}

const dataStore = new DataStoreClass();
export default dataStore;
export { DataStoreClass };
