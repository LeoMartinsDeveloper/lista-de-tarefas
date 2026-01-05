import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Plus,
  List,
  Check,
  SquarePen,
  Trash,
  CircleDashed,
  ListCheck,
  Trash2,
  SquareSigma,
} from "lucide-react";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-[#0a0a0a] flex flex-col justify-center items-center py-8">
      {/* Logo */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-semibold text-white tracking-tight">
          Recria<span className="text-[#3b82f6]">.ia</span>
        </h1>
      </div>

      <Card className="w-lg p-4">
        <div className="flex gap-2">
          <Input placeholder="Adicionar tarefa" />
          <Button className="cursor-pointer bg-[#3b82f6] hover:bg-[#2563eb] text-white">
            <Plus />
            Cadastrar
          </Button>
        </div>

        <CardContent>
          <Separator className="mb-4" />
          <div className="flex gap-3">
            <Badge className="cursor-pointer" variant="default">
              <List />
              Todas
            </Badge>
            <Badge className="cursor-pointer" variant="outline">
              <CircleDashed />
              Não finalizadas
            </Badge>
            <Badge className="cursor-pointer" variant="outline">
              <Check />
              Concluídas
            </Badge>
          </div>

          <div className="mt-4 border b-1">
            <div className="h-14 flex justify-between items-center border-b-2 border-t-2">
              <div className="w-2 h-full bg-green-400"></div>
              <p className="flex-1 px-2 text-sm">Tarefa teste</p>
              <div className="flex items-center cursor-pointer gap-2 mr-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      className="text-xs h-7 cursor-pointer"
                      variant="outline"
                    >
                      <SquarePen size={15} />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Editar tarefa</DialogTitle>
                    </DialogHeader>
                    <div className="flex gap-2">
                      <Input placeholder="Editar Tarefa" />
                      <Button className="cursor-pointer">Editar</Button>
                    </div>
                  </DialogContent>
                </Dialog>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      className="text-xs h-7 cursor-pointer"
                      variant="outline"
                    >
                      <Trash2 size={15} />
                    </Button>
                  </AlertDialogTrigger>

                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Tem certeza que deseja excluir x itens?
                      </AlertDialogTitle>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogAction className="cursor cursor-pointer">
                        Sim
                      </AlertDialogAction>
                      <AlertDialogCancel className="cursor cursor-pointer">
                        Cancelar
                      </AlertDialogCancel>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <div className="flex gap-2 items-center">
              <ListCheck size={17} />
              <p className="text-xs">Tarefas Concluídas (3/3)</p>
            </div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  className="text-xs h-7 cursor-pointer"
                  variant="outline"
                >
                  <Trash2 size={18} />
                  Limpar tarefas concluídas
                </Button>
              </AlertDialogTrigger>

              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Tem certeza que deseja excluir x itens?
                  </AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogAction className="cursor cursor-pointer">
                    Sim
                  </AlertDialogAction>
                  <AlertDialogCancel className="cursor cursor-pointer">
                    Cancelar
                  </AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
          <div className="h-3 w-full bg-gray-300 mt-4 rounded-md">
            <div
              className="h-full bg-blue-500 rounded-md"
              style={{ width: "50%" }}
            ></div>
          </div>

          <div className="flex justify-end items-center mt-2 gap-1.5">
            <SquareSigma size={18} />
            <p className="text-xs">3 Tarefas no total</p>
          </div>
        </CardContent>

        <div></div>
      </Card>
    </div>
  );
};

export default Home;
