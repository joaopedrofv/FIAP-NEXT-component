"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CheckFormProps {
  type: "issued" | "received";
}

export default function CheckForm({ type }: CheckFormProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    processDate: "",
    amount: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/checks/${type}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        toast({
          title: "Sucesso!",
          description: `Cheque ${type === "issued" ? "emitido" : "recebido"} registrado com sucesso.`,
        });
        setFormData({ date: "", description: "", processDate: "", amount: "" });
      }
    } catch (error) {
      toast({
        title: "Erro",
        description: "Não foi possível salvar os dados.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Cheques {type === "issued" ? "Emitidos" : "Recebidos"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="date">Data</Label>
            <Input
              id="date"
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              required
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="description">Descrição</Label>
            <Input
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="processDate">
              Data de {type === "issued" ? "Débito" : "Crédito"}
            </Label>
            <Input
              id="processDate"
              type="date"
              value={formData.processDate}
              onChange={(e) => setFormData({ ...formData, processDate: e.target.value })}
              required
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="amount">Valor</Label>
            <Input
              id="amount"
              type="number"
              step="0.01"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
              required
            />
          </div>
          
          <Button type="submit" className="w-full">
            Salvar
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}