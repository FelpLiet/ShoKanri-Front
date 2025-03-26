import './Dashboard.scss';
// import logo from "../assets/kanri-dark.svg"; Tentativa de Importação da Logo
import { FaWallet, FaPlus, FaMinus, FaExchangeAlt, FaCreditCard } from "react-icons/fa";
import * as React from "react"
import type { JSX } from "react";
import { ChartLegend, ChartLegendContent } from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Pie, PieChart, Label} from "recharts"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card" //CardFooter

const chartConfig = {
  receita: {
    label: "Receita",
    color: "#07823d",
  },
  despesa: {
    label: "Despesa",
    color: "#D9961A", 
  },
  despesasFixas: {
    label: "Despesas Fixas",
    color: "#07823d",
  },
  alimentacao: {
    label: "Alimentação",
    color: "#D9961A",
  },
  saude: {
    label: "Saúde",
    color: "#07823d",
  },
  transporte: {
    label: "Transporte",
    color: "#D9961A",
  },
  lazer: {
    label: "Lazer",
    color: "#07823d",
  },
  banco1: {
    label: "Nubank",
    color: "#820ad1",
  },
  banco2: {
    label: "Inter",
    color: "#ff6b00",
  },
  banco3: {
    label: "Itaú",
    color: "blue",
  },
  banco4: {
    label: "Banco do Brasil",
    color: "#0033a0",
  },
  banco5: {
    label: "Bradesco",
    color: "#cc092f",
  },
} satisfies ChartConfig

// Configurações Gráfico de Evolução das Despesas
const chartData = [
  { month: "Janeiro", receita: 186, despesa: 80 },
  { month: "Fevereiro", receita: 305, despesa: 200 },
  { month: "Março", receita: 237, despesa: 120 },
  { month: "Abril", receita: 73, despesa: 190 },
  { month: "Maio", receita: 209, despesa: 130 },
  { month: "Junho", receita: 214, despesa: 140 },
  { month: "Julho", receita: 220, despesa: 120 },
  { month: "Agosto", receita: 300, despesa: 150 },
  { month: "Setembro", receita: 315, despesa: 145 },
  { month: "Outubro", receita: 277, despesa: 125 },
  { month: "Novembro", receita: 377, despesa: 188 },
  { month: "Dezembro", receita: 398, despesa: 140 },
]

const chartElement = (
  <Card>
    <CardHeader>
      <CardTitle>Evolução das Despesas</CardTitle>
      <CardDescription>Janeiro - Junho 2025</CardDescription>
    </CardHeader>
    <CardContent>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10} 
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent nameKey="browser" />} />
          <Bar dataKey="receita" fill="var(--color-receita)" radius={4} />
          <Bar dataKey="despesa" fill="var(--color-despesa)" radius={4} />
        </BarChart>
      </ChartContainer>
    </CardContent>
  </Card>
);

// Configurações Gráfico de Ranking Categorias de Despesas
const chartDataCateg = [
  { browser: "despesasFixas", visitors: 275, fill: "var(--color-despesasFixas)" },
  { browser: "alimentacao", visitors: 200, fill: "var(--color-alimentacao)" },
  { browser: "saude", visitors: 187, fill: "var(--color-saude)" },
  { browser: "transporte", visitors: 173, fill: "var(--color-transporte)" },
  { browser: "lazer", visitors: 90, fill: "var(--color-lazer)" },
]

export function BarChartCateg() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ranking - Categoria Despesas</CardTitle>
        <CardDescription>Janeiro - Junho 2025</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartDataCateg}
            layout="vertical"
            margin={{
              left: 50,
            }}
          >
            <YAxis
              dataKey="browser"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => chartConfig[value as keyof typeof chartConfig]?.label}
            />
            <XAxis dataKey="visitors" type="number" hide />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Bar dataKey="visitors" layout="vertical" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

// Configurações Gráfico de Detalhamento dos Cartões
const chartDataCards = [
  { browser: "banco1", visitors: 275, fill: "var(--color-banco1)" },
  { browser: "banco2", visitors: 200, fill: "var(--color-banco2)" },
  { browser: "banco3", visitors: 187, fill: "var(--color-banco3)" },
  { browser: "banco4", visitors: 173, fill: "var(--color-banco4)" },
  { browser: "banco5", visitors: 90, fill: "var(--color-banco5)" },
]

function PieChartWithText({ chartDataCards, chartConfig }:
  { chartDataCards: { browser: string; visitors: number; fill: string; }[], chartConfig: any }) {
  const totalVisitors = React.useMemo(() => {
    return chartDataCards.reduce((acc: number, curr: { browser: string; visitors: number; fill: string }) => 
      acc + curr.visitors, 0);
  }, [chartDataCards]);
 
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Detalhamento dos Cartões</CardTitle>
        <CardDescription>Janeiro - Junho 2025</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartDataCards} dataKey="visitors" nameKey="browser" innerRadius={60} strokeWidth={5}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                        <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-3xl font-bold">
                          R$ {totalVisitors.toLocaleString('pt-BR')}
                        </tspan>
                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className="fill-muted-foreground">
                          Total
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

//Configurações da área de Visão Geral
const OverviewCard = ({ value, label, colorClass, icon, onClick }: { 
  value: string; 
  label: string; 
  colorClass: string; 
  icon: JSX.Element;
  onClick?: () => void; // Adicionando a propriedade onClick
}) => {
  return (
    <button className={`overview-card ${colorClass}`} onClick={onClick}>
      <div className="overview-icon">{icon}</div>
      <div>
        <p className="overview-value">{value}</p>
        <p className="overview-label">{label}</p>
      </div>
    </button>
  );
};

const handleCardClick = (label: string) => {
  alert(`Você clicou em: ${label}`);
};

const OverviewSection = () => {
  const cards = [
    { value: "R$ 27.797,08", label: "Contas", colorClass: "gray", icon: <FaWallet /> },
    { value: "R$ 24.897,08", label: "Receitas", colorClass: "green", icon: <FaPlus /> },
    { value: "R$ 0,00", label: "Despesas", colorClass: "yellow", icon: <FaMinus /> },
    { value: "R$ 20.287,07", label: "Movimentações", colorClass: "black", icon: <FaExchangeAlt /> },
    { value: "R$ 1.048,07", label: "Cartões de crédito", colorClass: "gold", icon: <FaCreditCard /> },
  ];

  return (
    <div className="overview-section">
      <h2>Visão Geral</h2>
      <div className="overview-container">
          {cards.map((card, index) => (
            <OverviewCard key={index} {...card} onClick={() => handleCardClick(card.label)} />
          ))}
      </div>
    </div>
  );
};

//Início da Tela
interface DashboardProps {
  onViewReports: () => void;
  onViewGoals: () => void;
  onOpenSettings: () => void;
}

const Dashboard = ({
}: DashboardProps) => {
  return (
    //Barra de Navegação / Navbar
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>LOGO ShoKanri</h1>

        {/* Avatar Perfil de Usuário */}
        <div className="user-profile">
          <div className="avatar">JD</div>
        </div>
      </header>
      
      {/* Conteúdo do Dashboard / Dashboard Content */}
      <div className="dashboard-content">
        
        {/* Área de Controle de Saldo e Despesas */}
        <div className="controle-saldo">
          <div className="balance-header">
            <h2>Controle de Saldo e Despesas</h2>
          </div>
          <div className="balance-details">
            <div className="balance-amount">
              {/* Ícone Check */}
              <div className="amount1">R$ 10,350.00</div>
              <div className="label">Inicial</div>
              {/* Ícone Circle-filled */}
              <div className="amount2">R$ 26,500.00</div>
              <div className="label">Saldo Atual</div>
              {/* Ícone Progress-check */}
              <div className="amount3">R$ 25,400.00</div>
              <div className="label">Previsto</div>
            </div>
          </div>
        </div>

        {/* Área de Gráfico de Evolução das Despesas */}
        <div> 
          {chartElement} {/* Inserindo o gráfico de Evolucao de Despesas */}
        </div>

        {/* Área de Gráfico de Ranking Categoria Despesas */}
        <div>
          <BarChartCateg /> {/* Inserindo o gráfico de Ranking Categoria de Despesas */}
        </div>
          
        {/* Área de Gráfico Detalhamento dos Cartões */}
        <div>
          <PieChartWithText chartDataCards={chartDataCards} chartConfig={chartConfig} /> {/* Inserindo o gráfico de Detalhamento dos Cartões */}
        </div>

      </div>

      {/* Área do Campo de Visão Geral */}
      <div className="balance-header">
        <h2><OverviewSection /></h2>
      </div>
      
    </div>
  );
};

export default Dashboard;
