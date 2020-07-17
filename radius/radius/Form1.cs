using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Xml;

namespace radius
{
    public partial class Form1 : Form
    {

        public Form1()
        {
            InitializeComponent();
        }
        string selectedFileName = "";
        private void button1_Click(object sender, EventArgs e)
        {
            XmlDocument xDoc = new XmlDocument();
            xDoc.Load(selectedFileName);
            XmlElement xRoot = xDoc.DocumentElement;
            foreach (XmlNode xnode in xRoot)
            {
                string succ = "удачная авторизация";
                string fail = "не удачная авторизация";
                string s = "";
                if (xnode.Attributes.Count > 0)
                {
                    XmlNode attr = xnode.Attributes.GetNamedItem("Event");
                }
                foreach (XmlNode childnode in xnode.ChildNodes)
                {
                    if (childnode.Name == "Timestamp")
                    {
                        s += "Дата/Время: " + childnode.InnerText + " ";
                    }
                    if (childnode.Name == "NAS-IP-Address")
                    {
                        s +="IP: " + childnode.InnerText + " "; 
                    }
                    if (childnode.Name == "Client-Friendly-Name")
                    {
                        s += "Клиент: " + childnode.InnerText + " ";
                    }
                    if (childnode.Name == "User-Name")
                    {
                        s += "Логин: " + childnode.InnerText + " ";
                    }
                    if (childnode.Name == "NP-Policy-Name")
                    {
                        s += "Политика: " + childnode.InnerText + " ";
                    }
                    if (childnode.Name == "Reason-Code")
                    {
                        if (childnode.InnerText == "16")
                        {
                            fail += s;
                            listBox1.Items.Add(fail);
                            fail = "не удачная авторизация";
                            s = "";
                        }
                        if(childnode.InnerText == "0")
                        {
                            succ += s;
                            listBox1.Items.Add(succ);
                            succ = "удачная авторизация";
                            s = "";
                        }


                    }
                }
            }
        }

        private void button2_Click(object sender, EventArgs e)
        {
            OpenFileDialog openFileDialog1 = new OpenFileDialog();

            openFileDialog1.InitialDirectory = "c:\\";
            openFileDialog1.Filter = "Log files (*.log)|*.log;";
            openFileDialog1.FilterIndex = 0;
            openFileDialog1.RestoreDirectory = true;

            if (openFileDialog1.ShowDialog() == DialogResult.OK)
            {
                selectedFileName = openFileDialog1.FileName;
            }
        }
    }
}
