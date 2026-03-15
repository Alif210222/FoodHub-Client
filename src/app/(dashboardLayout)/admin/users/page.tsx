"use client"

import { useEffect, useState } from "react"
import CustomerTable from "@/components/admin/users/CustomerTable"
import ProviderTable from "@/components/admin/users/ProviderTable"
import { customerService } from "@/services/customer/customersevice"
import { providerService } from "@/services/Provider/providerService"


export default function AdminUserPage() {
  const [customers, setCustomers] = useState<any[]>([])
  const [providers, setProviders] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const customerData = await customerService.getAllCustomers()
        const providerData = await providerService.getAllProviders()

        setCustomers(customerData)
        setProviders(providerData)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    loadUsers()
  }, [])

  if (loading) return <div className="p-6">Loading users...</div>

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">User Management</h1>

      <CustomerTable
        customers={customers}
        setCustomers={setCustomers}
      />

      <ProviderTable providers={providers} />
    </div>
  )
}