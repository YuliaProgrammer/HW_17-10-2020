
(
    function ()
    {
        let App = window.App || {}

        function Employees()
        {
            this.data = {}
        }

        Employees.prototype.add = function(employee)
        {
            if(!employee.id)
                throw new Error('Employees ID is necessary')
            if(this.data[employee.id])
                return false
            this.data[employee.id]=employee
            return true
        }

        Employees.prototype.remove = function (id)
        {
            if (!this.data[id])
                return false
            delete this.data[id]
                return true
        }
        Employees.prototype.getSalary = function (salary)
        {
          if(this.data[salary]<0)
              throw new Error('The salary is wrong')
              return this.data[salary]
        }

        Employees.prototype.get = function (id)
        {
            return this.data[id]
        }

        Employees.prototype.getAll = function ()
        {
            return Object.values(this.data)
        }
        App.Employees = Employees
        window.App = App
    }
)()