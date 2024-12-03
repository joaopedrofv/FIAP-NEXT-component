"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CashFlowForm from "@/components/forms/CashFlowForm";
import CardExpenseForm from "@/components/forms/CardExpenseForm";
import CheckForm from "@/components/forms/CheckForm";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-sky-50">
      <Header />
      <div className="container mx-auto py-8">
        <Tabs defaultValue="cashflow" className="max-w-2xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 bg-white">
            <TabsTrigger value="cashflow">Fluxo de Caixa</TabsTrigger>
            <TabsTrigger value="card">Cartão</TabsTrigger>
            <TabsTrigger value="checks-issued">Cheques Emitidos</TabsTrigger>
            <TabsTrigger value="checks-received">Cheques Recebidos</TabsTrigger>
          </TabsList>
          
          <TabsContent value="cashflow">
            <CashFlowForm />
          </TabsContent>
          
          <TabsContent value="card">
            <CardExpenseForm />
          </TabsContent>
          
          <TabsContent value="checks-issued">
            <CheckForm type="issued" />
          </TabsContent>
          
          <TabsContent value="checks-received">
            <CheckForm type="received" />
          </TabsContent>
        </Tabs>
        
        <Toaster />
      </div>
    </div>
  );
}