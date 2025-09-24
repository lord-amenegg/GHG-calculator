from flask import Flask, render_template, request, url_for
app = Flask(__name__)
               


@app.route('/',methods=['GET', 'POST'])
def start():
    return render_template('index.html')





@app.route('/greenhouse_gas_calculator')
def greenhouse_gas():
    return render_template('ghgcalculator.html')

@app.route('/iron_dose_new')
def iron_new():
    return render_template('iron_dose_new.html')


if __name__ == '__main__':
    app.run()