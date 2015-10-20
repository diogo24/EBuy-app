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
            DataTable resultData = new DataTable();

            using (OleDbConnection connectionHandler = new OleDbConnection(
            @"Provider=Microsoft.ACE.OLEDB.12.0;Data Source=C:\Users\diogo.marques\Documents\GitHubVisualStudio\EBuy\EBuy\EBuy.Model\Files\;Extended Properties=dBASE IV"))
            {
                // Open the connection, and if open successfully, you can try to query it
                connectionHandler.Open();

                if (connectionHandler.State == ConnectionState.Open)
                {
                    string mySQL = "select * from Cumas";  // dbf table name

                    OleDbCommand MyQuery = new OleDbCommand(mySQL, connectionHandler);
                    OleDbDataAdapter DA  = new OleDbDataAdapter(MyQuery);

                    DA.Fill(resultData);

                    connectionHandler.Close();
                }

                return resultData;
            }
        }
    }
}
