import React, { useState } from "react";
import Card from "@/components/ui/Card";
import ImageBlock1 from "@/components/partials/widget/block/image-block-1";
import GroupChart1 from "@/components/partials/widget/chart/group-chart-1";
import RevenueBarChart from "@/components/partials/widget/chart/revenue-bar-chart";
import RadialsChart from "@/components/partials/widget/chart/radials";
import SelectMonth from "@/components/partials/SelectMonth";
import HomeBredCurbs from "./HomeBredCurbs";
import Pie from "../chart/appex-chart/Pie";
import CalendarView from "@/components/partials/widget/CalendarView";
import MessageList from "@/components/partials/widget/message-list";
import Donut from "../chart/appex-chart/Donut";


const Dashboard = () => {
  // const [filterMap, setFilterMap] = useState("usa");
  return (
    <div>
      <HomeBredCurbs title="Dashboard" />
      <div className="grid grid-cols-12 gap-5 mb-5">
        <div className="2xl:col-span-12 lg:col-span-12 col-span-12">
          <Card bodyClass="p-4">
            <div className="grid md:grid-cols-3 col-span-1 gap-4">
              <GroupChart1 />
            </div>
          </Card>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5">
        <div className="lg:col-span-7 col-span-12">
          <Card>
            <div className="legend-ring mb-10">
              <RevenueBarChart />
            </div>
          </Card>
        </div>
        <div className="lg:col-span-5 col-span-12 ">
          <Card title="Messages" headerslot={<SelectMonth />}>
          <Donut />
          </Card>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
