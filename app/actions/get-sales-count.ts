import prismadb from "@/lib/prismaDB";

export const getSalesCount = async (storeId: string) => {
  const salesCount = prismadb.order.count({
    where:{
        storeId,
        isPaid: true
    }
  });

  return salesCount;
}