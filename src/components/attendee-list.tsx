import {
  Search,
  MoreHorizontal,
  ChevronLeft,
  ChevronsLeft,
  ChevronsRight,
  ChevronRight,
} from "lucide-react";
import { IconButton } from "./icon-button";
import { Table } from "./table/table";
import { TableHeader } from "./table/table-header";
import { TableCell } from "./table/table-cell";
import { TableInput } from "./table/table-input";

export function AttendeeList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="flex items-center w-72 rounded-lg px-3 py-1.5 border border-white/10 text-sm gap-3">
          <Search className="size-4 text-emerald-300" />
          <input
            className="bg-transparent flex-1 outline-none border-0 p-0 text-sm"
            type="text"
            placeholder="Buscar participantes..."
          />
        </div>
      </div>

      <div className="border border-white/10 rounded-lg">
        {/* Criação de tabela */}
        <Table>
          {/* Titulo da tabela */}
          <thead>
            <tr style={{ width: 48 }} className="border-b border-white/10">
              <TableHeader>
                <TableInput/>
              </TableHeader>
              <TableHeader>Código</TableHeader>
              <TableHeader>Participante</TableHeader>
              <TableHeader>Data de inscrição</TableHeader>
              <TableHeader>Data de check-in</TableHeader>
              <TableHeader style={{ width: 48 }}></TableHeader>
            </tr>
          </thead>

          {/* Corpo da tabela */}
          <tbody>
            {Array.from({ length: 8 }).map((_, i) => {
              return (
                <tr
                  key={i}
                  className="border-b border-white/10 hover:bg-white/5 transition"
                >
                  <TableCell>
                    <TableInput/>
                  </TableCell>
                  <TableCell>1234</TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <span className="font-semibold text-white">
                        Ytalo Alves e Silva
                      </span>
                      <span className="text-gray-200/50 text-xs">
                        ytaloalves10@hotmail.com
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>7 days ago</TableCell>
                  <TableCell>7 days ago</TableCell>
                  <TableCell>
                    <IconButton transparent>
                      {" "}
                      <MoreHorizontal className="size-4" />{" "}
                    </IconButton>
                  </TableCell>
                </tr>
              );
            })}
          </tbody>

          {/* Footer da tabela */}
          <tfoot>
            <tr>
              <TableCell colSpan={3}>
                Showing 10 of 228 items
              </TableCell>
              <TableCell className="py-3 px-2.5 text-sm text-zinc-300 text-right" colSpan={3}>
                <div className="inline-flex items-center gap-8">
                  <span>Page 1 of 11</span>
                  <div className="flex gap-1.5">
                    <IconButton>
                      <ChevronsLeft className="size-4" />
                    </IconButton>
                    <IconButton>
                      <ChevronLeft className="size-4" />
                    </IconButton>
                    <IconButton>
                      <ChevronRight className="size-4" />
                    </IconButton>
                    <IconButton>
                      <ChevronsRight className="size-4" />
                    </IconButton>
                  </div>
                </div>
              </TableCell>
            </tr>
          </tfoot>
        </Table>
      </div>
    </div>
  );
}
