"use client";

import { AuthDialogType } from "@/constants/dialogs";
import { openDialog } from "@/redux/features/auth-dialog-slice";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Activity,
  AlertTriangle,
  BarChart3,
  Clock,
  FileText,
  Package,
  Plus,
  Search,
  Settings,
  ShoppingCart,
  Users,
  XCircle,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Heart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { RootState } from "@/redux/store";
import { HomeWebViewType } from "@/models/data";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const websiteState = useSelector(
    (state: RootState) => state.website.currentView
  );

  useEffect(() => {
    const dialog = searchParams.get("dialog");

    if (
      dialog === AuthDialogType.LOGIN ||
      dialog === AuthDialogType.REGISTER ||
      dialog === AuthDialogType.FORGOT_PASSWORD ||
      dialog === AuthDialogType.NEW_VERIFICATION ||
      dialog === AuthDialogType.ERROR ||
      dialog === AuthDialogType.NEW_PASSWORD
    ) {
      dispatch(openDialog(dialog));
    }
  }, [searchParams, dispatch]);

  if (websiteState === HomeWebViewType.dashboard) {
    return (
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div className="hidden w-64 flex-col border-r bg-muted/40 px-4 py-6 md:flex">
          <div className="flex items-center gap-2 px-2">
            <Package className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">Meddy</span>
          </div>
          <nav className="mt-8 flex flex-1 flex-col gap-1">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Activity className="h-4 w-4" />
              Overview
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <ShoppingCart className="h-4 w-4" />
              Orders
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Package className="h-4 w-4" />
              Products
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Users className="h-4 w-4" />
              Customers
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <BarChart3 className="h-4 w-4" />
              Analytics
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </Button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <div className="container py-6">
            {/* Header */}
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <p className="text-muted-foreground">
                  Welcome back, here&apos;s what&apos;s happening today
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Select defaultValue="today">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="week">This Week</SelectItem>
                    <SelectItem value="month">This Month</SelectItem>
                    <SelectItem value="year">This Year</SelectItem>
                  </SelectContent>
                </Select>
                <Button>
                  <Plus className="mr-2 h-4 w-4" /> Add Product
                </Button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Sales
                  </CardTitle>
                  <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">₹45,231.89</div>
                  <p className="text-xs text-muted-foreground">
                    +20.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    Active Orders
                  </CardTitle>
                  <Package className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+573</div>
                  <p className="text-xs text-muted-foreground">
                    +201 since last hour
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Products
                  </CardTitle>
                  <Package className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12,234</div>
                  <p className="text-xs text-muted-foreground">
                    +19 new products added
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    Active Users
                  </CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+2350</div>
                  <p className="text-xs text-muted-foreground">
                    +180 new users today
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Orders and Alerts */}
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {/* Recent Orders */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Orders</CardTitle>
                  <CardDescription>You have 256 orders today</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Order</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recentOrders.map((order) => (
                        <TableRow key={order.id}>
                          <TableCell className="font-medium">
                            #{order.id}
                          </TableCell>
                          <TableCell>
                            <OrderStatus status={order.status} />
                          </TableCell>
                          <TableCell>{order.customer}</TableCell>
                          <TableCell className="text-right">
                            ₹{order.amount}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              {/* Alerts and Notifications */}
              <Card>
                <CardHeader>
                  <CardTitle>Alerts & Notifications</CardTitle>
                  <CardDescription>You have 3 urgent alerts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {alerts.map((alert) => (
                      <div
                        key={alert.id}
                        className="flex items-start gap-4 rounded-lg border p-4"
                      >
                        <AlertIcon type={alert.type} />
                        <div className="flex-1">
                          <h4 className="text-sm font-semibold">
                            {alert.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {alert.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="mt-8">
              <h2 className="mb-4 text-lg font-semibold">Quick Actions</h2>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {quickActions.map((action) => (
                  <Button
                    key={action.name}
                    variant="outline"
                    className="h-auto flex-col gap-2 p-4"
                  >
                    <action.icon className="h-6 w-6" />
                    <span>{action.name}</span>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Header Navigation */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Explore</h1>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        {/* Main Promotional Banners */}
        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="#"
            className="relative overflow-hidden rounded-lg bg-[#E7F9E7]"
          >
            <div className="relative flex items-center p-8">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">GET UP TO 50% OFF</h2>
                <p className="text-muted-foreground">on your first order</p>
                <Button
                  size="sm"
                  className="bg-primary text-primary-foreground"
                >
                  Get Discount
                </Button>
              </div>
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Promotional Image"
                width={200}
                height={200}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              />
            </div>
          </Link>
          <Link
            href="#"
            className="relative overflow-hidden rounded-lg bg-[#FFF8E7]"
          >
            <div className="relative flex items-center p-8">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Health Essentials</h2>
                <p className="text-muted-foreground">Daily wellness products</p>
                <Button size="sm" variant="secondary">
                  Shop Now
                </Button>
              </div>
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Health Essentials"
                width={200}
                height={200}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              />
            </div>
          </Link>
        </div>

        {/* Featured Products Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card key={product.id} className="group relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-2 z-10"
              >
                <Heart className="h-4 w-4" />
                <span className="sr-only">Add to wishlist</span>
              </Button>
              <Link href="#">
                <CardContent className="p-0">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="object-cover w-full aspect-square rounded-t-lg"
                  />
                </CardContent>
                <CardFooter className="p-4">
                  <div className="space-y-1 w-full">
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {product.category}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold">
                        ₹{product.price}
                      </span>
                      <Badge variant="secondary">
                        {product.prescription ? "Rx" : "OTC"}
                      </Badge>
                    </div>
                  </div>
                </CardFooter>
              </Link>
            </Card>
          ))}
        </div>

        {/* Quick Access Section */}
        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Quick Access</h3>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {quickAccess.map((item) => (
              <Link
                key={item.id}
                href="#"
                className="group relative aspect-square overflow-hidden rounded-md"
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={200}
                  height={200}
                  className="object-cover w-full h-full transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="text-white text-sm font-medium">
                    {item.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Special Categories */}
        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="#"
            className="relative overflow-hidden rounded-lg bg-[#F0F7FF]"
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">Diabetic Care</h3>
              <p className="text-muted-foreground mb-4">
                Complete range of diabetic medicines
              </p>
              <Button variant="secondary">Explore Products</Button>
            </div>
          </Link>
          <Link
            href="#"
            className="relative overflow-hidden rounded-lg bg-[#FFF0F0]"
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">First Aid</h3>
              <p className="text-muted-foreground mb-4">
                Essential medical supplies
              </p>
              <Button variant="secondary">View All</Button>
            </div>
          </Link>
        </div>

        <section className="border-t bg-muted/40">
          <div className="container py-8 md:py-12 lg:py-24">
            <div className="mx-auto max-w-[58rem] space-y-6 text-center">
              <h2 className="font-heading text-3xl font-bold leading-[1.1] sm:text-3xl md:text-4xl">
                Popular Categories
              </h2>
              <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Browse through our most popular medical categories
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 sm:grid-cols-2 md:grid-cols-3">
              {categories.map((category) => (
                <Link
                  key={category.title}
                  href="#"
                  className="group relative overflow-hidden rounded-lg border bg-background p-2"
                >
                  <div className="p-4">
                    <h3 className="font-bold">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="container py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-heading text-3xl font-bold leading-[1.1] sm:text-3xl md:text-4xl">
              Ready to Join Our Network?
            </h2>
            <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Start selling your products to thousands of customers today
            </p>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Button size="lg">Register as Vendor</Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </section>
        <footer className="border-t">
          <div className="container grid gap-8 py-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <h4 className="text-lg font-bold">About</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-bold">Support</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Safety Information
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Shipping
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-bold">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t">
            <div className="container flex flex-col gap-4 py-6 text-center text-sm text-muted-foreground md:flex-row md:justify-between md:text-left">
              <p>© 2024 Meddy. All rights reserved.</p>
              <p>Developed with care for the healthcare community</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

const products = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    category: "Pain Relief",
    price: 9.99,
    prescription: false,
    image: "/para.png",
  },
  {
    id: 2,
    name: "Blood Pressure Monitor",
    category: "Medical Devices",
    price: 89.99,
    prescription: false,
    image: "/blood.png",
  },
  {
    id: 3,
    name: "Insulin Pen",
    category: "Diabetes Care",
    price: 49.99,
    prescription: true,
    image: "/insulin.png",
  },
  // Add more products as needed
];

const quickAccess = [
  {
    id: 1,
    name: "Pain Relief",
    image: "/pain-relief.png",
  },
  {
    id: 2,
    name: "First Aid",
    image: "/first-aid.png",
  },
  {
    id: 3,
    name: "Vitamins",
    image: "/vitamins.png",
  },
  {
    id: 4,
    name: "Diabetes",
    image: "/diabetes.png",
  },
  {
    id: 5,
    name: "Baby Care",
    image: "/baby-care.png",
  },
  {
    id: 6,
    name: "Personal Care",
    image: "/personal-care.png",
  },
];

const categories = [
  {
    title: "Prescription Medicines",
    description: "Authentic prescription medications from licensed pharmacies",
  },
  {
    title: "Over-the-Counter",
    description: "Common medicines available without prescription",
  },
  {
    title: "Medical Devices",
    description: "Quality healthcare and monitoring devices",
  },
  {
    title: "Personal Care",
    description: "Healthcare and wellness products",
  },
  {
    title: "Baby Care",
    description: "Essential products for infant healthcare",
  },
  {
    title: "Health Supplements",
    description: "Vitamins and dietary supplements",
  },
];

function OrderStatus({
  status,
}: {
  status: "pending" | "processing" | "completed" | "cancelled";
}) {
  const statusStyles = {
    pending:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    processing: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    completed:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    cancelled: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  };

  return (
    <Badge variant="secondary" className={statusStyles[status]}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </Badge>
  );
}

function AlertIcon({ type }: { type: "warning" | "info" | "error" }) {
  const icons = {
    warning: AlertTriangle,
    info: Clock,
    error: XCircle,
  };

  const Icon = icons[type];
  return <Icon className="h-5 w-5 text-muted-foreground" />;
}

const recentOrders = [
  {
    id: "ORD001",
    status: "completed" as const,
    customer: "John Doe",
    amount: 125.99,
  },
  {
    id: "ORD002",
    status: "processing" as const,
    customer: "Jane Smith",
    amount: 89.99,
  },
  {
    id: "ORD003",
    status: "pending" as const,
    customer: "Bob Johnson",
    amount: 245.5,
  },
  {
    id: "ORD004",
    status: "cancelled" as const,
    customer: "Alice Brown",
    amount: 59.99,
  },
];

const alerts = [
  {
    id: 1,
    type: "warning" as const,
    title: "Low Stock Alert",
    description: "5 products are running low on stock",
  },
  {
    id: 2,
    type: "info" as const,
    title: "New Orders",
    description: "You have 15 new orders to process",
  },
  {
    id: 3,
    type: "error" as const,
    title: "Expired Products",
    description: "3 products have expired",
  },
];

const quickActions = [
  {
    name: "Add Product",
    icon: Plus,
  },
  {
    name: "View Reports",
    icon: FileText,
  },
  {
    name: "Process Orders",
    icon: ShoppingCart,
  },
  {
    name: "Settings",
    icon: Settings,
  },
];
