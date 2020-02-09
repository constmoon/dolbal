from xml.etree import ElementTree


def parse(s: str):
    root = ElementTree.fromstring(s)

    total_count = root.find('list_total_count').text
    accidents = [
        {
            'starts_at_date': row.find('occr_date').text,
            'starts_at_time': row.find('occr_time').text,
            'ends_at_date': row.find('exp_clr_date').text,
            'ends_at_time': row.find('exp_clr_time').text,
            'x_coordinate': row.find('grs80tm_x').text,
            'y_coordinate': row.find('grs80tm_y').text,
            'description': row.find('acc_info').text,
        } for row in root.findall('row')
    ]

    return total_count, accidents
