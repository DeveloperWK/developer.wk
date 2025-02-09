import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/UI/Components/card";

export function LoadingCard() {
  return (
    <Card className="overflow-hidden bg-background/30 backdrop-blur-sm border-primary/10">
      <div className="relative h-48 sm:h-64 bg-gray-700 animate-pulse" />
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <div className="w-20 h-6 bg-gray-700 rounded animate-pulse" />
          <div className="w-24 h-4 bg-gray-700 rounded animate-pulse" />
        </div>
        <div className="h-6 bg-gray-700 rounded animate-pulse mb-2" />
      </CardHeader>
      <CardContent>
        <div className="h-4 bg-gray-700 rounded animate-pulse mb-2" />
        <div className="h-4 bg-gray-700 rounded animate-pulse mb-2" />
        <div className="h-4 bg-gray-700 rounded animate-pulse" />
      </CardContent>
      <CardFooter>
        <div className="w-full h-10 bg-gray-700 rounded animate-pulse" />
      </CardFooter>
    </Card>
  );
}
