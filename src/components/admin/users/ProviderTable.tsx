import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProviderTable({ providers }: { providers: any[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Providers</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b">
              <tr>
                <th className="text-left py-2">Restaurant</th>
                <th className="text-left py-2">Location</th>
                <th className="text-left py-2">Owner</th>
                <th className="text-left py-2">Approved</th>
              </tr>
            </thead>

            <tbody>
              {providers.map((provider) => (
                <tr key={provider.id} className="border-b">
                  <td className="py-2">{provider.resturentName}</td>
                  <td>{provider.location}</td>
                  <td>{provider.user?.name}</td>
                  <td>
                    {provider.isApproved ? (
                      <span className="text-green-600">Approved</span>
                    ) : (
                      <span className="text-red-500">Pending</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}