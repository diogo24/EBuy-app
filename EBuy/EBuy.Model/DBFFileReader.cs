using System;
using System.Collections.Generic;
using System.Data;
using System.Data.OleDb;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EBuy.Model
{
    public class DBFFileReader
    {
        public DataTable GetCumasFileData()
        {
            // http://www.connectionstrings.com/dbf-foxpro/
            // http://stackoverflow.com/questions/22361457/c-sharp-read-from-dbf-files-into-a-datatable
            // http://www.codeproject.com/Articles/24247/Load-a-DBF-into-a-DataTable
            // https://msdn.microsoft.com/en-us/library/system.data.oledb.oledbconnection(v=vs.110).aspx
            // http://stackoverflow.com/questions/11356878/get-data-in-a-dbf-file-using-c-sharp

            DataTable resultData = new DataTable();

            using (OleDbConnection connectionHandler = new OleDbConnection(
            @"Provider=Microsoft.ACE.OLEDB.12.0;Data Source=C:\Users\diogo.marques\Downloads\Newest version\Newest version\Newest version\SALONMAN CURRENT\;Extended Properties=dBASE IV"))
            {
                // Open the connection, and if open successfully, you can try to query it
                connectionHandler.Open();

                if (connectionHandler.State == ConnectionState.Open)
                {
                    string mySQL = "select * from Cumas";  // dbf table name

                    OleDbCommand MyQuery = new OleDbCommand(mySQL, connectionHandler);
                    OleDbDataAdapter DA  = new OleDbDataAdapter(MyQuery);

                    DA.Fill(resultData);

                    var databaseName  = connectionHandler.Database;
                    var serverVersion = connectionHandler.ServerVersion;
                    var site          = connectionHandler.Site;
                    var schema        = connectionHandler.GetSchema();
                    var container     = connectionHandler.Container;

                    connectionHandler.Close();
                }

                return resultData;
            }
        }
    }
}
