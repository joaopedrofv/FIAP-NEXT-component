"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CardExpenseForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    debit: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/card-expense', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        toast({
          title: "Sucesso!",
          description: "Gastos do cartão registrados com sucesso.",
        });
        setFormData({ date: "", description: "", debit: "" });
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
        <CardTitle>Controle de Gastos do Cartão</CardTitle>
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
            <Label htmlFor="debit">Valor</Label>
            <Input
              id="debit"
              type="number"
              step="0.01"
              value={formData.debit}
              onChange={(e) => setFormData({ ...formData, debit: e.target.value })}
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