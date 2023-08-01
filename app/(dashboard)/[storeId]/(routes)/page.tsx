import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/Heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, Package2, PoundSterlingIcon } from "lucide-react";
import { formatter } from "@/lib/utils";
import { getTotalRevenue } from "@/app/actions/get-total-revenue";
import { getSalesCount } from "@/app/actions/get-sales-count";
import { getStockCount } from "@/app/actions/get-stock-count";
import { Overview } from "@/components/Overview";
import { getGraphRevenue } from "@/app/actions/get-graph-revenue";

interface DashboardPageProps {
	params: {
		storeId: string;
	};
}

{
	/* @ts-ignore */}
const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {
	const totalRevenue = await getTotalRevenue(params.storeId);
	const stockCount = await getStockCount(params.storeId);
	const salesCount = await getSalesCount(params.storeId);
	const graphRevenue = await getGraphRevenue(params.storeId);

	return (
		<div className="flex-col">
			<div className="flex-1 space-y-4 p-8 pt-6">
				<Heading title="Dashboard" description="Overview of your store" />
				<Separator />
				<div className="grid gap-4 grid-cols-3">
					<Card>
						<CardHeader className="flex flex-row items-center justify-between space-y-4">
							<CardTitle className="text-sm font-medium">
								Total Revenue
							</CardTitle>
							<PoundSterlingIcon className=" h-4 w-4 text-muted-foreground" />
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">
								{formatter.format(totalRevenue)}
							</div>
						</CardContent>
					</Card>
					<Card>
						<CardHeader className="flex flex-row items-center justify-between space-y-4">
							<CardTitle className="text-sm font-medium">Sales</CardTitle>
							<CreditCard className="h-4 w-4 text-muted-foreground" />
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">{salesCount}</div>
						</CardContent>
					</Card>
					<Card>
						<CardHeader className="flex flex-row items-center justify-between space-y-4">
							<CardTitle className="text-sm font-medium">Stock</CardTitle>
							<Package2 className="h-4 w-4 text-muted-foreground" />
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">{stockCount}</div>
						</CardContent>
					</Card>
				</div>
				<Card className="col-span-4">
					<CardHeader>
						<CardTitle>Overview</CardTitle>
					</CardHeader>
					<CardContent className="pl-2">
						<Overview data={graphRevenue} />
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default DashboardPage;
