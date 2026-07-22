import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table";
import { ProductProps } from "@/types/products-t";
import { commaThree } from "@/utils/comma-three";

export default function MoreInfo({ product }: { product: ProductProps }) {
  return (
    <Tabs defaultValue="info" className="w-full mt-7">
      <TabsList variant={"line"}>
        <TabsTrigger
          value="info"
          className="cursor-pointer lg:opacity-70 lg:hover:hover:opacity-100"
        >
          مشخصات بیشتر
        </TabsTrigger>
        {/*<TabsTrigger value="password">Password</TabsTrigger>*/}
      </TabsList>
      <TabsContent value="info" className="h-auto ">
        <Table className="border rounded-2xl">
          <TableBody>
            <TableRow>
              <TableHead className="text-right font-semibold w-40">
                نام کالا
              </TableHead>
              <TableCell>
                {product.name} {commaThree(product.weight_or_volume)}{" "}
                {product.unit} {product.brand}
              </TableCell>
            </TableRow>
            <TableRow className="bg-accent">
              <TableHead className="text-right font-semibold w-40">
                برند
              </TableHead>
              <TableCell>{product.brand}</TableCell>
            </TableRow>
            <TableRow>
              <TableHead className="text-right font-semibold w-40">
                دسته بندی
              </TableHead>
              <TableCell>{product.category.name}</TableCell>
            </TableRow>
            <TableRow className="bg-accent">
              <TableHead className="text-right font-semibold w-40">
                وزن / حجم
              </TableHead>
              <TableCell>
                {commaThree(product.weight_or_volume)} {product.unit}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableHead className="text-right font-semibold w-40">
                موجودی
              </TableHead>
              <TableCell>{product.stock > 0 ? "موجود" : "ناموجود"}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TabsContent>
    </Tabs>
  );
}
