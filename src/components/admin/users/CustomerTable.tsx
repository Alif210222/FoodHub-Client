import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CustomerTable({ customers }: { customers: any[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Customers</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b">
              <tr>
                <th className="text-left py-2">Name</th>
                <th className="text-left py-2">Email</th>
                <th className="text-left py-2">Role</th>
                <th className="text-left py-2">Status</th>
              </tr>
            </thead>

            <tbody>
              {customers.map((user) => (
                <tr key={user.id} className="border-b">
                  <td className="py-2">{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>{user.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}